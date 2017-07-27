import * as types from './types';
import RNFetchBlob from 'react-native-fetch-blob';
import * as Utils from '../utils/utils';
import {AsyncStorage} from 'react-native';
import RNFS from 'react-native-fs';
import _ from 'underscore';

let DOWNLOADING_SONGS = [],//danh sách đang download
     DOWNLOADED_SONGS = [];// danh sách đã download

export function downloadMusic(song, changedPath, recover) {
    return async (dispatch) => {
      try {
        if(song.downloading) return;// nếu bài hát đang download thì return luôn
        song.preparing = true;// bật cờ chuẩn bị tải
        song.downloading = true;// bật cờ đang tải

        // danh sách bài hát lưu ở local
        let songs = await Utils.getSongsFromStorage();

        // tìm bài hát có trong songs(lưu ở local)
        if(   //!recover && 
          Utils.findSongInCollection(song.id, songs)) return {};

        // push vào danh sách đang download
        DOWNLOADING_SONGS.push(song);

        let dirs = RNFetchBlob.fs.dirs;
        let songInfo = {url: song.path}
        if(!changedPath) {
          // {
          //   "status": true, 
          //   "url": "http://52.232.85.160/ratmkowFc4A"
          // }
          songInfo = await Utils.getSongInfo(song.path, song.id);
        }
        song.preparing = false;
         const songRes = await RNFetchBlob
                        .config({
                          path: `${dirs.DocumentDir}/${song.id}.mp3`
                        })
                        .fetch('GET', songInfo.url, {})
                        .progress((received, total) => {
                          dispatch(setProgress(received / total, song.id));
                        });
          const imgRes = await RNFetchBlob
                          .config({
                            path: `${dirs.DocumentDir}/${song.id}.jpg`
                          })
                          .fetch('GET', recover? Utils.getThumbUrl(song.id): song.thumb, {});

          song.downloading = false;// tắt cờ đang tải
          song.downloaded = true;// bật cờ đã tải xong
          song.path = songRes.path();// set path cho video
          song.thumb = imgRes.path();//set path cho ảnh
          song.key = song.id;//set id cho video

          DOWNLOADING_SONGS.pop();//lấy ra khỏi ds đang download
          DOWNLOADED_SONGS.push(song);// bỏ vào ds đã download

          if(!DOWNLOADING_SONGS.length) {// ko còn video nào đang tải nữa
            let updatedSongs = await Utils.setSongsToStorage(DOWNLOADED_SONGS, recover);
            DOWNLOADED_SONGS = [];// reset ds đã download xong về rỗng
            return dispatch(setSongs(updatedSongs));
          }

      } catch(err) {
        DOWNLOADING_SONGS.pop();
        song.downloading = false;
        song.preparing = false;
        let songs = await Utils.getSongsFromStorage();
        dispatch(setSongs(songs));
        console.warn(err);
      }
    }
}

export function setProgress(progress, id) {
  return {
    type: types.PROGRESS,// type là đang tải
    progress,// phần trăm tải xong
    id//id của video tải
  }
}


export function musicDownloaded(path) {
  return {
    type: types.DOWNLOADED,
    path
  }
}

export function deleteSong(index, song) {
  return async (dispatch) => {
    let songs = await Utils.getSongsFromStorage();
    try {
      await RNFS.unlink(song.path);
      await RNFS.unlink(song.thumb);
      songs.splice(index, 1);
      await AsyncStorage.setItem('songs', JSON.stringify(songs));
      return dispatch(setSongs(songs));
    } catch(err) {
        //If song not found in path
        songs.splice(index, 1);
        await AsyncStorage.setItem('songs', JSON.stringify(songs));
        return dispatch(setSongs(songs));
    }
  }
}

export function setSongs(songs) {
  return {
    type: types.SONGS,
    songs
  }
}


export function recoverDeletedSongs(songs) {
  return async dispatch => {
    let promises = _.map(songs, song => RNFS.exists(song.path));
    let results = await Promise.all(promises);
    _.each(results, (res, index) => !res && dispatch(downloadMusic(songs[index], false, true)));
  }
}
