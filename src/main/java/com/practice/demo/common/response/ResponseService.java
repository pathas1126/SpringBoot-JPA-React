package com.practice.demo.common.response;

import com.practice.demo.common.response.enums.StatusType;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ResponseService {

  public static <T> CommonResult<T> passToClient(T resultData) {
    Optional<T> optionalData = Optional.ofNullable(resultData);

    if (optionalData.isPresent()) return getSuccessResult(resultData);
    else return getFailResult(null);
  }

  public static <T> CommonResult<T> getSuccessResult(T resultData) {
    CommonResult<T> commonResult = new CommonResult<>();
    StatusType success = StatusType.SUCCESS;
    commonResult.setResult(resultData);
    commonResult.setStatus(success);
    commonResult.setMessage(success.getMsg());
    return commonResult;
  }

  public static <T> CommonResult<T> getFailResult(T resultData) {
    CommonResult<T> commonResult = new CommonResult<>();
    StatusType fail = StatusType.FAIL;
    commonResult.setResult(resultData);
    commonResult.setStatus(fail);
    commonResult.setMessage(fail.getMsg());
    return commonResult;
  }
}
