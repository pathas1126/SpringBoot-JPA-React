package com.practice.demo.lotto.controller;

import com.practice.demo.lotto.service.LottoService;
import com.practice.demo.lotto.domain.Lotto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LottoController {


    private final LottoService lottoService;

    @Autowired
    LottoController(LottoService lottoService){
        this.lottoService = lottoService;
    }

    @GetMapping("/api/lotto/numbers/winning")
    public Lotto getWinningNumbers(){
        return lottoService.popWinningNumbers();
    }
}
