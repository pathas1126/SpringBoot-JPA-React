package com.practice.demo.lotto.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;

public class LottoDTO {

  @Getter
  @RequiredArgsConstructor
  public static class WinningGameResponse {
    private final ArrayList<Integer> winningGame;
  }

  @Getter
  @RequiredArgsConstructor
  public static class RandomGameResponse {
    private final ArrayList<Integer> randomGame;
  }

  @Getter
  @RequiredArgsConstructor
  public static class RandomGamesResponse {
    private final ArrayList<ArrayList<Integer>> randomGames;
  }
}
