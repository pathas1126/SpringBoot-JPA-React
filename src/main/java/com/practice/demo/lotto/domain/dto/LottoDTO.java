package com.practice.demo.lotto.domain.dto;

import com.practice.demo.lotto.domain.Lotto;
import com.practice.demo.lotto.utils.LottoGame;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
    private final ArrayList<Integer> customGame;
  }

  public static String convertArrayToString(List<Integer> list) {
    return list.stream().map(v -> v + " ").collect(Collectors.joining());
  }
}
