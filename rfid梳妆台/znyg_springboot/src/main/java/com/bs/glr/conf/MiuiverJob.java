package com.bs.glr.conf;

import com.bs.glr.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * @作者 9999
 * @时间 9999-06-18 14:16
 * @描述 ${var}
 */
@Slf4j
@Component
public class MiuiverJob extends QuartzJobBean {


    @Resource
    UserService userService;


    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {


    }


}
