package com.practice.demo.lotto.domain.dto;

import com.practice.demo.lotto.domain.Lotto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class LottoDTO {

  @RequiredArgsConstructor
  public static class WinningGameResponse {
    private final ArrayList<Integer> winningGame;
  }

  @RequiredArgsConstructor
  public static class RandomGameResponse {
    private final ArrayList<Integer> randomGame;
  }

  @RequiredArgsConstructor
  public static class RandomGamesResponse {
    private final ArrayList<ArrayList<Integer>> randomGames;
  }

  @Getter
  @RequiredArgsConstructor
  public static class CustomGameRequest {
    private List<Integer> customGame;

    public Lotto toEntity() {
      return Lotto.builder().numbers(LottoDTO.convertArrayToString(this.getCustomGame())).build();
    }
  }

  @Getter
  @RequiredArgsConstructor
  public static class CustomGameResponse {
    private final Integer lottoId;
  }

  public static String convertArrayToString(List<Integer> list) {
    return list.stream().map(v -> v + " ").collect(Collectors.joining());
  }
}
