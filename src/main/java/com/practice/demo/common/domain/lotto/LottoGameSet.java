package com.practice.demo.common.domain.lotto;

import lombok.Getter;

import java.util.ArrayList;


@Getter
public class LottoGameSet extends ArrayList<LottoGame> {

    private ArrayList<LottoGame> gameSet;

    public LottoGameSet(int gameSetLength){
        setGameSet(gameSetLength);
    }

    public void setGameSet(int gameSetLength) {
        int gameLength = 7;

        int count = 0;
        while (count++ < gameSetLength) {
            this.gameSet.add(new LottoGame(gameLength));
        }
    }
}
