package com.practice.demo.lotto.controller;

import com.practice.demo.common.domain.CommonResult;
import com.practice.demo.common.domain.enums.StatusType;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.service.LottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LottoController {


    private final LottoService lottoService;

    @Autowired
    public LottoController(LottoService lottoService) {
        this.lottoService = lottoService;
    }

    @GetMapping("/lotto/numbers/winning")
    @ResponseBody
    public CommonResult<Object> getWinningNumbers() {
        LottoDTO.WinningGameResponse winningNumbers = lottoService.popWinningNumbers();
        if (winningNumbers != null) {
            String msg = "지난 주 로또 우승 번호를 성공적으로 조회했습니다.";
            System.out.println(StatusType.SUCCESS);
            return CommonResult.builder().status(StatusType.SUCCESS).message(msg).result(winningNumbers).build();
        } else {
            String msg = "데이터 조회에 실패했습니다.";
            return CommonResult.builder().status(StatusType.FAIL).message(msg).result(null).build();
        }

    }
}
