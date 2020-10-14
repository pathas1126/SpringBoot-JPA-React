package com.practice.demo.lotto.utils;

import lombok.Getter;

import java.util.ArrayList;

@Getter
public class LottoGames {

  private ArrayList<LottoGame> games;

  public LottoGames(int gamesLength) {
    setGames(gamesLength);
  }

  public void setGames(int gamesLength) {
    ArrayList<LottoGame> games = new ArrayList<>();
    int gameLength = 6;

    int count = 0;
    while (count++ < gamesLength) {
      games.add(new LottoGame(gameLength));
    }

    this.games = games;
  }
}
