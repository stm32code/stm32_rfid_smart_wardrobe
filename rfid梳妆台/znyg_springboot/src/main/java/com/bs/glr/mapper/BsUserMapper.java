package com.bs.glr.mapper;

import com.bs.glr.bean.BsUser;
import com.bs.glr.bean.BsUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BsUserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    long countByExample(BsUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int deleteByExample(BsUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int insert(BsUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int insertSelective(BsUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    List<BsUser> selectByExample(BsUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    BsUser selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int updateByExampleSelective(@Param("record") BsUser record, @Param("example") BsUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int updateByExample(@Param("record") BsUser record, @Param("example") BsUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int updateByPrimaryKeySelective(BsUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_user
     *
     * @mbg.generated Fri Apr 29 23:53:19 CST 9999
     */
    int updateByPrimaryKey(BsUser record);

}