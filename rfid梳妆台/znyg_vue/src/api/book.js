import request from '@/utils/request'
import { getToken } from '@/utils/auth';
export default {
	// String goodId, String goodName,Integer page,Integer size
	selectAxios(goodId, goodName, page, size) {
		return request({
			url: '/auth/GoodsInfo/select',
			method: 'get',
			params: {
				goodId: goodId,
				goodName: goodName,
				page: page,
				size: size
			}
		})
	},
	// Integer goodsId, Integer num, String desc
	updateAxios(goodId, num, desc) {
		return request({
			url: '/auth/GoodsInfo/update',
			method: 'get',
			params: {
				goodsId: goodId,
				num: num,
				desc: desc
			}
		})
	},
		wardrobeCategoryTableInsertAxios(cname) {
			return request({
				url: '/auth/wardrobeCategoryTableInsert',
				method: 'get',
				params: {
					cname:cname, 
					token: getToken(),
				}
			})
		},
		wardrobeCategoryTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/wardrobeCategoryTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		wardrobeCategoryTableUpdateAxios(changeId, cname) {
			return request({
				url: '/auth/wardrobeCategoryTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					cname:cname, 
					token: getToken(),
				}
			})
		},
		wardrobeCategoryTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/wardrobeCategoryTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		wardrobeCategoryTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/wardrobeCategoryTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		wardrobeTableInsertAxios(categoryName,quantity) {
			return request({
				url: '/auth/wardrobeTableInsert',
				method: 'get',
				params: {
					categoryName:categoryName, 
					quantity:quantity, 
					token: getToken(),
				}
			})
		},
		wardrobeTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/wardrobeTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		wardrobeTableUpdateAxios(changeId, categoryName,quantity) {
			return request({
				url: '/auth/wardrobeTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					categoryName:categoryName, 
					quantity:quantity, 
					token: getToken(),
				}
			})
		},
		wardrobeTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/wardrobeTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		wardrobeTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/wardrobeTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		attributeTableInsertAxios(aname,material,color) {
			return request({
				url: '/auth/attributeTableInsert',
				method: 'get',
				params: {
					aname:aname, 
					material:material, 
					color:color, 
					token: getToken(),
				}
			})
		},
		attributeTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/attributeTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		attributeTableUpdateAxios(changeId, aname,material,color) {
			return request({
				url: '/auth/attributeTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					aname:aname, 
					material:material, 
					color:color, 
					token: getToken(),
				}
			})
		},
		attributeTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/attributeTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		attributeTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/attributeTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		clothingCategoryTableInsertAxios(categoryName) {
			return request({
				url: '/auth/clothingCategoryTableInsert',
				method: 'get',
				params: {
					categoryName:categoryName, 
					token: getToken(),
				}
			})
		},
		clothingCategoryTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/clothingCategoryTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		clothingCategoryTableUpdateAxios(changeId, categoryName) {
			return request({
				url: '/auth/clothingCategoryTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					categoryName:categoryName, 
					token: getToken(),
				}
			})
		},
		clothingCategoryTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/clothingCategoryTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		clothingCategoryTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/clothingCategoryTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		clothingTableInsertAxios(categoryName,wardrobeName,attribute,rfid,cname,imageUrl) {
			return request({
				url: '/auth/clothingTableInsert',
				method: 'get',
				params: {
					categoryName:categoryName, 
					wardrobeName:wardrobeName, 
					attribute:attribute, 
					rfid:rfid, 
					cname:cname, 
					imageUrl:imageUrl, 
					token: getToken(),
				}
			})
		},
		inAxios(categoryName,wardrobeName,attribute,rfid,cname) {
			return request({
				url: '/auth/in',
				method: 'get',
				params: {
					categoryName:categoryName, 
					wardrobeName:wardrobeName, 
					attribute:attribute, 
					rfid:rfid, 
					cname:cname, 
					token: getToken(),
				}
			})
		},
		clothingTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/clothingTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		clothingTableUpdateAxios(changeId, categoryName,wardrobeName,attribute,rfid,cname,imageUrl) {
			return request({
				url: '/auth/clothingTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					categoryName:categoryName, 
					wardrobeName:wardrobeName, 
					attribute:attribute, 
					rfid:rfid, 
					cname:cname, 
					imageUrl:imageUrl, 
					token: getToken(),
				}
			})
		},
		outAxios(changeId, categoryName,wardrobeName,attribute,rfid,cname) {
			return request({
				url: '/auth/out',
				method: 'get',
				params: {
					cid:changeId, 
					categoryName:categoryName, 
					wardrobeName:wardrobeName, 
					attribute:attribute, 
					rfid:rfid, 
					cname:cname, 
					token: getToken(),
				}
			})
		},
		clothingTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/clothingTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		getRandomData() {
			return request({
				url: '/auth/getRandomData',
				method: 'get',
				params: {
					token: getToken(),
				}
			})
		},
		clothingTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/clothingTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		dataTableInsertAxios(temperature,humidity,ctime) {
			return request({
				url: '/auth/dataTableInsert',
				method: 'get',
				params: {
					temperature:temperature, 
					humidity:humidity, 
					ctime:ctime, 
					token: getToken(),
				}
			})
		},
		dataTableDeleteByIdAxios(bid){
		  return request({
		    url: '/auth/dataTableDeleteById',
		    method: 'get',
		    params: {
		      bid: bid,
				token:getToken(),
		    }
		  })
		},
		dataTableUpdateAxios(changeId, temperature,humidity,ctime) {
			return request({
				url: '/auth/dataTableUpdate',
				method: 'get',
				params: {
					changeId:changeId, 
					temperature:temperature, 
					humidity:humidity, 
					ctime:ctime, 
					token: getToken(),
				}
			})
		},
		dataTableSelectListAxios(page, limit) {
			return request({
				url: '/auth/dataTableSelectList',
				method: 'get',
				params: {
					page: page,
					limit: limit,
					token: getToken(),
				}
			})
		},
		dataTableSelectByIdAxios(changeId) {
			return request({
				url: '/auth/dataTableSelectById',
				method: 'get',
				params: {
					changeId: changeId,
					token: getToken(),
				}
			})
		},
		getwardrobeCategoryOption() {
			return request({
				url: '/auth/getwardrobeCategoryOption',
				method: 'get',
				params: {
					token: getToken(),
				}
			})
		},
		
		
		getClothingCategoryOption() {
			return request({
				url: '/auth/getClothingCategoryOption',
				method: 'get',
				params: {
					token: getToken(),
				}
			})
		},
		
		getAttributeOption() {
			return request({
				url: '/auth/getAttributeOption',
				method: 'get',
				params: {
					token: getToken(),
				}
			})
		},
		
		getWardrobeOption() {
			return request({
				url: '/auth/getWardrobeOption',
				method: 'get',
				params: {
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

}
