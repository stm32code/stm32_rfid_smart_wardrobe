package com.bs.glr.service;

import com.bs.glr.bean.BsUser;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @author glr
 * @create 9999-01-31 14:09
 * @desc ${var}
 */
public interface UserService {


    List<BsUser> getUserByUname(String uname);

    void loginToken(String uuid,Integer uid);


    String getUserNameByToken(String token);

    Integer insertUser(String uname, String pwd);

    void insertToken(Integer uid, String token);

    PageInfo<BsUser> selectUserListByPage(Integer page, Integer limit);

    void deleteUserById(Integer uid);

    void updatePwdByUid(Integer uid, String pwd);

    BsUser selectUserByUid(Integer uid);

    BsUser getUserById(Integer uid);

    BsUser getUserByToken(String token);

    Integer insertUserBean(BsUser user);

    PageInfo<BsUser> getUserListByCondition(String uname, String email, String major, Integer page, Integer limit);

    Integer updateUserAllInfo(BsUser user);


    List<BsUser> getInactiveUser();

    List<BsUser> getCommonlyUser();

    List<BsUser> getActiveUser();




}
