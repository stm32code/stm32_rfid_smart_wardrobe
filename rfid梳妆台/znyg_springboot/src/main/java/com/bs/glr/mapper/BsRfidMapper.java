package com.bs.glr.mapper;

import com.bs.glr.bean.BsRfid;
import com.bs.glr.bean.BsRfidExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BsRfidMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    long countByExample(BsRfidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int deleteByExample(BsRfidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int insert(BsRfid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int insertSelective(BsRfid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    List<BsRfid> selectByExample(BsRfidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    BsRfid selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int updateByExampleSelective(@Param("record") BsRfid record, @Param("example") BsRfidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int updateByExample(@Param("record") BsRfid record, @Param("example") BsRfidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int updateByPrimaryKeySelective(BsRfid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bs_rfid
     *
     * @mbg.generated Mon Feb 28 18:07:26 CST 9999
     */
    int updateByPrimaryKey(BsRfid record);
}