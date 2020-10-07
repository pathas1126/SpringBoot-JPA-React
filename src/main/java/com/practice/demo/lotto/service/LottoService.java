package com.practice.demo.lotto.service;

import com.practice.demo.common.domain.lotto.LottoGame;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.repository.LottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LottoService {

    private final LottoRepository lottoRepository;

    @Autowired
    public LottoService(LottoRepository lottoRepository) {
        this.lottoRepository = lottoRepository;
    }

    public LottoDTO.WinningGameResponse findWinningGame() {
        Long targetId = 1L;
        if (lottoRepository.findById(targetId).isPresent()) {
            LottoGame lottoGame = new LottoGame(lottoRepository.findById(targetId).get().getWinningNumbers());
            return new LottoDTO.WinningGameResponse(lottoGame.getGame());
        }
        return null;
    }

}
