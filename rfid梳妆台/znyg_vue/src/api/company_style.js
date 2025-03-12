import request from '@/utils/request'
import { getToken } from '@/utils/auth';
export default {

	selectAxios(params) {
		return request({
			url: '/auth/CompanyStyle/select',
			method: 'post',
			params
		})
	},

	addAxios(params) {
		return request({
			url: '/auth/CompanyStyle/add',
			method: 'post',
			params
		})
	},
	deleteAxios(id) {
		return request({
			url: '/auth/CompanyStyle/delete',
			method: 'get',
			params: {
				id: id
			}
		})
	},
	selectByIdAxios(id) {
		return request({
			url: '/auth/CompanyStyle/getInfoById',
			method: 'get',
			params: {
				id: id
			}
		})
	},
	updateAxios(params) {
		return request({
			url: '/auth/CompanyStyle/update',
			method: 'post',
			params
		})
	},
	getCurrData(device) {
		return request({
			url: '/auth/stm/getCurrData',
			method: 'get',
			params: {
				device: device,
				// size: size,
				// inOutNo:inOutNo
			}
		})
	},

	getLimit(device) {
		return request({
			url: '/auth/getLimit',
			method: 'get',
			params: {
				device: device,
				// size: size,
				// inOutNo:inOutNo
			}
		})
	},
	set_limit(wdl, sdl, ywl, krqtl,device) {
		return request({
			url: '/auth/setLimit',
			method: 'get',
			params: {
				wdl: wdl,
				sdl: sdl,
				ywl: ywl,
				krqtl: krqtl,
				device: device
			}
		})
	},
	getHistData(page, device) {
		return request({
			url: '/auth/stm/getHistory',
			method: 'get',
			params: {
				page: page,
				device: device,
				// inOutNo:inOutNo
			}
		})
	},

	getWarList(page, device) {
		return request({
			url: '/auth/getWarList',
			method: 'get',
			params: {
				page: page,
				device: device,
				// inOutNo:inOutNo
			}
		})
	},
	delWar(wid) {
		return request({
			url: '/auth/delWar',
			method: 'get',
			params: {
				wid: wid,
				// inOutNo:inOutNo
			}
		})
	},
	changeWar(wid, value) {
		return request({
			url: '/auth/updateWar',
			method: 'get',
			params: {
				wid: wid,
				value: value
			}
		})
	},
	updateRfid(changeId, rfid) {
		return request({
			url: '/auth/updateRfid',
			method: 'get',
			params: {
				changeId: changeId,
				rfid: rfid
			}
		})
	},
	setCon(fan, buzz, mode,device) {
		return request({
			url: '/auth/setCon',
			method: 'get',
			params: {
				fan: fan,
				buzz: buzz,
				mode: mode,
				device: device,
			}
		})
	},
	get_hist_Chart(option,device) {
		return request({
			url: '/auth/stm/getChartData',
			method: 'get',
			params: {
				option: option,
				device: device,
				// // inOutNo:inOutNo
			}
		})
	},
	bsUserInsertAxios(uname, pwd, identity, age, email) {
		return request({
			url: '/auth/bsUserInsert',
			method: 'get',
			params: {
				unamea: uname,
				pwd: pwd,
				identity: identity,
				age: age,
				email: email,
				token: getToken(),
			}
		})
	},
	getRfif() {
		return request({
			url: '/auth/book/rfid/getRfid',
			method: 'get',
			params: {
				token: getToken(),
			}
		})
	},
	
	bsUserDeleteByIdAxios(bid) {
		return request({
			url: '/auth/bsUserDeleteById',
			method: 'get',
			params: {
				bid: bid,
				token: getToken(),
			}
		})
	},
	bsUserUpdateAxios(changeId, uname, pwd, identity, age, email) {
		return request({
			url: '/auth/bsUserUpdate',
			method: 'get',
			params: {
				changeId: changeId,
				unamea: uname,
				pwd: pwd,
				identity: identity,
				age: age,
				email: email,
				token: getToken(),
			}
		})
	},
	bsUserSelectListAxios(page, limit) {
		return request({
			url: '/auth/bsUserSelectList',
			method: 'get',
			params: {
				page: page,
				limit: limit,
				token: getToken(),
			}
		})
	},
	bsUserSelectByIdAxios(changeId) {
		return request({
			url: '/auth/bsUserSelectById',
			method: 'get',
			params: {
				changeId: changeId,
				token: getToken(),
			}
		})
	},
	getInfo(){
		return request({
			url: '/auth/getinfo',
			method: 'get',
			params: {
				token: getToken(),
			}
		})
	},
	webRegister1(uname, pwd, age, sex, major, grade, email, phone) {
		return request({
			url: '/user/webRegister',
			method: 'get',
			withCredentials: false,
			params: {
				uname: uname,
				pwd: pwd,
				pwd: pwd,
				age: age,
				sex: sex,
				major: major,
				grade: grade,
				email: email,
				phone: phone,
			}
		})
	},
	updateUserInfoAxios(changeId,pwd, age, email) {
		return request({
			url: '/auth/updateUserAllInfo',
			method: 'get',
			withCredentials: false,
			params: {
				changeId: changeId,
				pwd: pwd,
				age: age,
				email: email,
			}
		})
	},

}