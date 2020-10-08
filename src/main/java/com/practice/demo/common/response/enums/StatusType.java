package com.practice.demo.common.response.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusType {
    SUCCESS(0, "성공하였습니다."),
    FAIL(-1, "실패하였습니다.");

    int code;
    String msg;

}
