package com.practice.demo.lotto.domain.dto;

import com.practice.demo.common.lotto.LottoGame;
import lombok.Getter;

import java.util.ArrayList;

public class LottoDTO {

    @Getter
    public static class WinningGameResponse {
        private final ArrayList<Integer> winningGame;

        public WinningGameResponse(ArrayList<Integer> winningGame) {
            this.winningGame = winningGame;
        }
    }

    @Getter
    public static class RandomGameResponse {
        private final ArrayList<Integer> randomGame;

        public RandomGameResponse(ArrayList<Integer> randomGame) {
            this.randomGame = randomGame;
        }
    }

    @Getter
    public static class RandomGamesResponse {
        private final ArrayList<ArrayList<Integer>> randomGames;

        public RandomGamesResponse(ArrayList<ArrayList<Integer>> randomGames) {
            this.randomGames = randomGames;
        }
    }
}
