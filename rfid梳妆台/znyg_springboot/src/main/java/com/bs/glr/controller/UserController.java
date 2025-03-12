package com.bs.glr.controller;

import com.alibaba.druid.util.StringUtils;
import com.bs.glr.bean.*;
import com.bs.glr.mapper.*;
import com.bs.glr.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sun.nio.cs.US_ASCII;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * @author glr
 * @create
 * @desc ${var}
 */
@RestController
public class UserController {
    @Resource
    UserService userService;
    @Resource
    BsUserMapper bsUserMapper;
    @Autowired
    private StringRedisTemplate redisTemplate;

    @RequestMapping("/user/login")
    public ResultBean login(String uname, String pwd) {

        if (StringUtils.isEmpty(uname) || StringUtils.isEmpty(pwd)) {
            return ResultBean.returnError().pushMessage("请将用户名和密码输入完整");
        }

        List<BsUser> userList = userService.getUserByUname(uname);
        if (userList == null || userList.size() == 0) {
            return ResultBean.returnError().pushMessage("用户不存在");
        }


        if (!userList.get(0).getPwd().equals(pwd)) {
            return ResultBean.returnError().pushMessage("用户名或密码不正确");
        }
        String uuid = UUID.randomUUID().toString();


//        redisTemplate.opsForValue().set("user_token:" + uuid, uname);
        userService.loginToken(uuid, userList.get(0).getId());

        return ResultBean.returnOk().pushData("token", uuid);
    }


    @RequestMapping("/user/webRegister")
    public ResultBean register(String uname, String pwd, String age, String sex, String major, String grade, String email, String phone) {

//        if (StringUtils.isEmpty(phone)) {
//            return ResultBean.returnError("请输入手机号");
//        }
//        try {
//            Integer.parseInt(age);
//        } catch (NumberFormatException e) {
//            return ResultBean.returnError("年龄必须为数字");
//        }
        //校验用户名是否存在
        List<BsUser> userByUname = userService.getUserByUname(uname);
        if (userByUname != null && userByUname.size() > 0) {
            return ResultBean.returnError().pushMessage("用户名已经存在，请重新输入");
        }
        //插入用户表
        BsUser user = new BsUser();
        user.setPwd(pwd);
        user.setUname(uname);
        user.setIdentity("1");
        user.setAge(1);
        user.setSex(sex);
        user.setMajor(major);
        user.setGrade(grade);
        user.setEmail(email);
        user.setBookCount(0);
        Integer uid = userService.insertUserBean(user);

//        Integer uid = userService.insertUser(uname,pwd);
        //插入token表
        String token = UUID.randomUUID().toString();
        userService.insertToken(uid, token);

        return ResultBean.returnOk().pushData("token", token).pushMessage("注册成功");
    }


    //用户查询
    @RequestMapping("/auth/selectUserList")
    public ResultBean selectUserList(Integer page, Integer limit) {

        if (page == null) {
            page = 1;
        }
        if (limit == null) {
            limit = 10;
        }

        PageInfo<BsUser> pageInfo = userService.selectUserListByPage(page, limit);
        long total = pageInfo.getTotal();
        List<BsUser> list = pageInfo.getList();

        List<BsUser> returnList = new ArrayList<>();


        return ResultBean.returnOk().pushData("total", total).pushData("list", returnList);
    }


    //用户删除
    @RequestMapping("/auth/deleteUser")
    public ResultBean deleteUser(Integer delUid) {

        userService.deleteUserById(delUid);

        return ResultBean.returnOk().pushMessage("删除成功");
    }

    //修改用户密码
    @RequestMapping("/auth/updatePwdByUid")
    public ResultBean updatePwdByUid(Integer uid, String pwd) {

        BsUser bsUser = userService.selectUserByUid(uid);
        if (bsUser == null) {
            return ResultBean.returnError().pushMessage("用户不存在");
        }
        userService.updatePwdByUid(uid, pwd);

        return ResultBean.returnOk().pushMessage("修改成功");
    }

    /**
     * @Author L H
     * @desc //获取信息
     * @Date
     **/
    @RequestMapping("/auth/info")
    public ResultBean changePwd(String token) {
        BsUser user = userService.getUserByToken(token);
        if (user == null) {
            return ResultBean.returnError("用户不存在");
        }

        String role = "";

        if ("0".equals(user.getIdentity())) {
            role = "man";
        } else {
            role = "pan";
        }

        if (user != null) {
            return ResultBean.returnOk().pushData("name", user.getUname()).pushData("avatar", "https://scwtest20200706.oss-cn-beijing.aliyuncs.com/jd.jpg")
                    .pushData("roles", role);
        }
        return ResultBean.returnError();
    }


    @RequestMapping("/auth/getinfo")
    public ResultBean getinfo(String token) {
        BsUser user = userService.getUserByToken(token);
        if (user == null) {
            return ResultBean.returnError("用户不存在");
        }
        user.setUpwd(user.getPwd());
        return ResultBean.returnOk().pushData("data",user);
    }
    @RequestMapping("/auth/getUserListByCondition")
    public ResultBean getUserListByCondition(String username, String email, String major, Integer page, Integer limit) {
        if (page == null) {
            page = 1;
        }
        if (limit == null) {
            limit = 10;
        }


        PageInfo<BsUser> pageInfo = userService.getUserListByCondition(username, email, major, page, limit);
        long total = pageInfo.getTotal();
        List<BsUser> list = pageInfo.getList();

        return ResultBean.returnOk().pushData("total", total).pushData("list", list);
    }

    /**
     * @Author
     * @desc //根据uid获取用户信息
     * @Date
     **/
    @RequestMapping("/auth/getUserInfoByUid")
    public ResultBean getUserInfoByUid(Integer userUId) {
        BsUser userById = userService.getUserById(userUId);
        return ResultBean.returnOk().pushData("data", userById);
    }

    /**
     * @Author
     * @desc //更新用户信息
     * @Date
     **/
    @RequestMapping("/auth/updateUserAllInfo")
    public ResultBean updateUserAllInfo(Integer changeId, String username, String pwd, String age, String sex, String major, String grade, String email) {

        try {
            Integer.parseInt(age);
        } catch (NumberFormatException e) {
            return ResultBean.returnError("年龄必须为数字");
        }

        BsUser user = new BsUser();
        user.setId(changeId);
        user.setPwd(pwd);
        user.setUname(username);
        user.setAge(Integer.parseInt(age));
        user.setSex(sex);
        user.setMajor(major);
        user.setGrade(grade);
        user.setEmail(email);
        Integer line = userService.updateUserAllInfo(user);
        if (line > 0) {
            return ResultBean.returnOk();
        }
        return ResultBean.returnError();


    }


    /**
     * @Author
     * @desc //根据token获取用户信息
     * @Date
     **/
    @RequestMapping("/auth/getUserInfoByToken")
    public ResultBean getUserInfoByToken(Integer uid) {

        BsUser userById = userService.getUserById(uid);
        return ResultBean.returnOk().pushData("data", userById);

    }





    @RequestMapping("/auth/bsUserInsert")
    public ResultBean bsUserInsert (String email,Integer age,String identity,String pwd,String unamea){

        BsUser bsUser = new BsUser();
        bsUser.setUname(unamea);
        bsUser.setPwd(pwd);
        bsUser.setIdentity(identity);
        bsUser.setAge(age);
        bsUser.setEmail(email);
        Integer line = bsUserMapper.insertSelective(bsUser);
        if(line>0){
            return ResultBean.returnOk();
        }
        return ResultBean.returnError();
    }


    @RequestMapping("/auth/bsUserDeleteById")
    public ResultBean bsUserDeleteById (Integer bid){
        BsUser bsUser = new BsUser();
        bsUser.setId(bid);
        Integer line = bsUserMapper.deleteByPrimaryKey(bid);
        if(line>0){
            return ResultBean.returnOk();
        }
        return ResultBean.returnError();
    }


    @RequestMapping("/auth/bsUserUpdate")
    public ResultBean bsUserUpdate (Integer changeId,String email,Integer age,String identity,String pwd,String unamea){

        BsUser bsUser = new BsUser();
        bsUser.setUname(unamea);
        bsUser.setPwd(pwd);
        bsUser.setIdentity(identity);
        bsUser.setAge(age);
        bsUser.setEmail(email);
        bsUser.setId(changeId);
        Integer line = bsUserMapper.updateByPrimaryKeySelective(bsUser);
        if(line>0){
            return ResultBean.returnOk();
        }
        return ResultBean.returnError();
    }


    @RequestMapping("/auth/bsUserSelectList")
    public ResultBean bsUserSelectList (Integer page,Integer size){
        if(page == null){
            page = 1;
        }
        if(size == null){
            size = 10;
        }
        PageHelper.startPage(page,size);
        BsUserExample example = new BsUserExample();
        example.setOrderByClause("id desc");
        List<BsUser> bsData = bsUserMapper.selectByExample(example);
        PageInfo<BsUser> pageInfo = new PageInfo<>(bsData);
        long total = pageInfo.getTotal();
        List<BsUser> list = pageInfo.getList();
        List<BsUser> rlist = new ArrayList<>();
        for (BsUser user : list) {
            String identity = user.getIdentity();
            if(identity.equals("0")){
                user.setIdentity("管理员");
            }else if(identity.equals("1")){
                user.setIdentity("普通用户");
            }
            rlist.add(user);
        }
        if(list==null || list.size()<=0){

            return ResultBean.returnError().pushMessage("暂时没有数据");
        }
        return ResultBean.returnOk().pushData("total",total).pushData("data",rlist);
    }


    @RequestMapping("/auth/bsUserSelectById")
    public ResultBean bsUserSelectById (Integer changeId){
        BsUser bsUser = bsUserMapper.selectByPrimaryKey(changeId);
        return ResultBean.returnOk().pushData("data",bsUser);
    }


//    updateRfid(changeId, rfid)
    @RequestMapping("/auth/updateRfid")
    public ResultBean updateRfid (Integer changeId, String rfid){
        BsUser user = new BsUser();
        user.setId(changeId);
        user.setGrade(rfid);
        bsUserMapper.updateByPrimaryKeySelective(user);
        return ResultBean.returnOk();
    }







}
