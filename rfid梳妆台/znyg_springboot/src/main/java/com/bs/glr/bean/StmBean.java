package com.bs.glr.bean;

import lombok.Data;

/**
 * @作者 9999
 * @时间 9999-04-01 18:54
 * @描述
 */
@Data
public class StmBean {
    private  Integer buzzW;
    private  Integer funW;

    public StmBean() {
    }

    public StmBean(Integer buzzW, Integer funW) {
        this.buzzW = buzzW;
        this.funW = funW;
    }
}
