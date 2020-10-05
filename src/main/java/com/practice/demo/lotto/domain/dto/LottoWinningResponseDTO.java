package com.practice.demo.lotto.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LottoWinningResponseDTO {
    private Long lotto_no;

    private String lotto_winning;
}
