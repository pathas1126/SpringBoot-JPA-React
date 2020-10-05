package com.practice.demo.lotto.service;

import com.practice.demo.lotto.domain.Lotto;
import com.practice.demo.lotto.repository.LottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LottoService {

    private final LottoRepository lottoRepository;

    @Autowired
    LottoService(LottoRepository lottoRepository){
        this.lottoRepository = lottoRepository;
    }

    public Lotto popWinningNumbers(){
        return lottoRepository.findById(1L).orElseThrow();
    }

}
