package com.practice.demo.common.domain.response;

import com.practice.demo.common.domain.response.enums.StatusType;
import lombok.*;

@Getter
@Setter
@Builder
public class CommonResult<T> {
    private StatusType status;
    private String message;
    private T result;
}
