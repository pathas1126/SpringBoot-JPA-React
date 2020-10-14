package com.practice.demo.lotto.service;

import com.practice.demo.lotto.domain.Lotto;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.repository.LottoRepository;
import com.practice.demo.lotto.utils.LottoGame;
import com.practice.demo.lotto.utils.LottoGames;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class LottoService {

  private final LottoRepository lottoRepository;

  public LottoDTO.WinningGameResponse findWinningGame() throws EntityNotFoundException {
    Long targetId = 1L;
    Optional<Lotto> lotto =
        Optional.ofNullable(
            lottoRepository
                .findById(targetId)
                .orElseThrow(() -> new EntityNotFoundException("당첨 번호를 가져오지 못했습니다.")));

    if (lotto.isPresent()) {
      LottoGame lottoGame = new LottoGame(lotto.get().getNumbers());
      return new LottoDTO.WinningGameResponse(lottoGame.getGame());
    }

    return null;
  }

  public LottoDTO.CustomGameResponse saveCustomGame(LottoDTO.CustomGameRequest customGameRequest) {
    Lotto lotto = customGameRequest.toEntity();
    Integer lottoId = Math.toIntExact(lottoRepository.save(lotto).getId());
    return new LottoDTO.CustomGameResponse(lottoId);
  }

  public LottoDTO.RandomGameResponse createRandomGame() {
    int lottoGameLength = 6;
    LottoGame lottoGame = new LottoGame(lottoGameLength);
    return new LottoDTO.RandomGameResponse(lottoGame.getGame());
  }

  public LottoDTO.RandomGamesResponse createRandomGames() {
    int lottoGamesLength = 5;

    ArrayList<LottoGame> lottoGames = new LottoGames(lottoGamesLength).getGames();
    ArrayList<ArrayList<Integer>> lottoGamesForDto = new ArrayList<>();

    lottoGames.forEach((lottoGame) -> lottoGamesForDto.add(lottoGame.getGame()));

    return new LottoDTO.RandomGamesResponse(lottoGamesForDto);
  }
}
