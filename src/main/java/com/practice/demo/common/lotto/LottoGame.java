package com.practice.demo.common.lotto;

import lombok.Getter;

import java.util.ArrayList;
import java.util.Arrays;

@Getter
public class LottoGame extends ArrayList<Integer> {
    private ArrayList<Integer> game;

    public LottoGame(Integer gameLength) {
        setGame(gameLength);
    }

    public LottoGame(String lottoGameString) {
        setGameFromString(lottoGameString);
    }

    private int createRandomIndex(int max) {
        return (int) Math.floor(Math.random() * max);
    }

    private ArrayList<Integer> shuffleNumbers(ArrayList<Integer> lottoNumbers, int shuffleTimes) {
        int count = 0;
        while (count++ < shuffleTimes) {
            int sizeBeforeRemove = lottoNumbers.size();
            int removeTargetIndex = createRandomIndex(sizeBeforeRemove);

            Integer poppedNumber = lottoNumbers.remove(removeTargetIndex);

            int sizeAfterRemove = lottoNumbers.size();
            int addTargetIndex = createRandomIndex(sizeAfterRemove);

            lottoNumbers.add(createRandomIndex(addTargetIndex), poppedNumber);
        }
        return lottoNumbers;
    }

    private Integer popNumber(ArrayList<Integer> lottoNumbers) {
        int numbersSize = lottoNumbers.size();
        return lottoNumbers.get(createRandomIndex(numbersSize));
    }

    private void setGame(int gameLength) {
        ArrayList<Integer> game = new ArrayList<>();

        int lottoNumbersLength = 45;
        ArrayList<Integer> lottoNumbers = new LottoNumbers(lottoNumbersLength).getLottoNumbers();

        int shuffleTimes = 30;

        int count = 0;
        while (count++ < gameLength) {
            game.add(popNumber(shuffleNumbers(lottoNumbers, shuffleTimes)));
        }
        this.game = game;
    }

    private void setGameFromString(String numbersString) {
        ArrayList<Integer> numbers = new ArrayList<>();
        ArrayList<String> numberChars = new ArrayList<>(Arrays.asList(numbersString.split(" ")));
        numberChars.forEach((character) -> numbers.add(Integer.parseInt(character)));
        this.game = numbers;
    }
}
