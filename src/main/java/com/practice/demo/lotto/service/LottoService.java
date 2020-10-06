package com.practice.demo.lotto.service;

import com.practice.demo.lotto.domain.Lotto;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.repository.LottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.NoSuchElementException;

@Service
@Transactional
public class LottoService {

    private final LottoRepository lottoRepository;

    @Autowired
    public LottoService(LottoRepository lottoRepository) {
        this.lottoRepository = lottoRepository;
    }

    public LottoDTO.WinningGameResponse popWinningNumbers() {
        return new LottoDTO.WinningGameResponse(lottoRepository.findById(1L).orElseThrow(NoSuchElementException::new).getWinning());
    }

}
