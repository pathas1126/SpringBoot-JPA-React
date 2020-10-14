package com.practice.demo.lotto.utils;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;

@Getter
@Setter
public class LottoGame {
  private ArrayList<Integer> game;

  public LottoGame(int gameLength) {
    LottoGameGenerator lottoGameGenerator = new LottoGameGenerator();
    ArrayList<Integer> lottoGameNumbers = lottoGameGenerator.createGame(gameLength);
    setGame(lottoGameNumbers);
  }

  public LottoGame(String lottoGameString) {
    LottoGameGenerator lottoGameGenerator = new LottoGameGenerator();
    ArrayList<Integer> lottoGameNumbers = lottoGameGenerator.createGameFromString(lottoGameString);
    setGame(lottoGameNumbers);
  }
}
