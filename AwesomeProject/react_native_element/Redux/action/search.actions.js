import _ from 'underscore';

import * as types from './types';
import * as Utils from '../utils/utils';
import Config from '../config';

// tìm kiếm bài hát
export function searchSong(query) {
  console.log("sdsdsdsds")
  return async (dispatch) => {
    dispatch(setSearchResults([]));// xóa mảng kết quả search dc về rỗng
    console.log("sdsdsdsds1")
    dispatch(setLoading(true));// hiện trạng thái Loading(đang search)
    console.log("sdsdsdsds2")
    let res = await fetch(`${Config.SEARCH_API_URL}${query}`);//fetch tới URL theo query truyền vào
    console.log("sdsdsdsds3")
    res = await res.json();// chuyển nó sang kiểu json
    console.log("sdsdsdsds4")
    res = Utils.filterSearchResults(res);// trả ra 1 mảng kiểu state
    console.log(res)
    console.log("sdsdsdsds5")
    res = await setDownloadedSongs(res);// trả ra 1 mảng kiểu state (set thêm download hay chưa)
    console.log("sdsdsdsds6")
    dispatch(setLoading(false));// tắt trạng thái Loading
    console.log("sdsdsdsds7")
    return dispatch(setSearchResults(res));// trả về mảng kết quả search dc
    
  }
}

// dựa vào res(là mảng state) trả ra thêm type là search
export function setSearchResults(res) {
  return {
    type: types.SEARCH,
    res
  }
}

// dựa vào res(là mảng state) trả ra thêm type là loading
function setLoading(res) {
  return {
    type: types.LOADING,
    res
  };
}

//trả về map các song
async function setDownloadedSongs(songs) {
  console.log(songs)
  console.log("songs")
  let downloadedSongs = await Utils.getSongsFromStorage();//get danh sách các bài hát đã download
  console.log("qwe2")
  console.log(downloadedSongs)
  console.log("qwe3")
  return _.map(songs, song => {
    let findedSong = _.findWhere(downloadedSongs, { id: song.id });// kiểm tra xem bài hát với id này có trang danh sách đã download chưa
    console.log(findedSong)
    
    if (findedSong) {
      findedSong.downloaded = true;//download rồi thì nút download thay bàng nút play(ở trang search)
       console.log("qwe6")
      return findedSong;
    }
    console.log("qwe7")
    return song;
  }
  );
}
