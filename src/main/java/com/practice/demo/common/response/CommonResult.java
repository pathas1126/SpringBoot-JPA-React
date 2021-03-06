package com.practice.demo.common.response;

import com.practice.demo.common.response.enums.StatusType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommonResult<T> {
  private StatusType status;
  private String message;
  private T result;
}
