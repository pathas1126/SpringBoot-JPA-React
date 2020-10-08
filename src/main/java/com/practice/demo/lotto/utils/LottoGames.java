package com.practice.demo.lotto.utils;

import lombok.Getter;

import java.util.ArrayList;

@Getter
public class LottoGames extends ArrayList<LottoGame> {

  private ArrayList<ArrayList<Integer>> games;

  public LottoGames(int gamesLength) {
    setGames(gamesLength);
  }

  public void setGames(int gamesLength) {
    ArrayList<ArrayList<Integer>> games = new ArrayList<>();
    int gameLength = 7;

    int count = 0;
    while (count++ < gamesLength) {
      games.add(new LottoGame(gameLength).getGame());
    }

    this.games = games;
  }
}
