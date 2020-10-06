package com.practice.demo.lotto.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class LottoDTO {

    @Getter
    @AllArgsConstructor
    public static class WinningGameResponse {
        private final String winningNumbers;
    }
}
