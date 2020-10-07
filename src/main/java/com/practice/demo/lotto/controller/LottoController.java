package com.practice.demo.lotto.controller;

import com.practice.demo.common.lotto.LottoGame;
import com.practice.demo.common.response.CommonResult;
import com.practice.demo.common.response.enums.StatusType;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.service.LottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LottoController {


    private final LottoService lottoService;

    @Autowired
    public LottoController(LottoService lottoService) {
        this.lottoService = lottoService;
    }

    @GetMapping("/lotto/game/winning")
    @ResponseBody
    public CommonResult<Object> getWinningGame() {
        Optional<LottoDTO.WinningGameResponse> winningGame = Optional.ofNullable(lottoService.findWinningGame());
        String msg;
        StatusType status;

        if (winningGame.isPresent()) {
            msg = "지난 주 로또 우승 번호를 성공적으로 조회했습니다.";
            status = StatusType.SUCCESS;
            return CommonResult.builder().status(status).message(msg).result(winningGame).build();
        } else {
            msg = "데이터 조회에 실패했습니다.";
            status = StatusType.FAIL;
            return CommonResult.builder().status(status).message(msg).result(null).build();
        }
    }

    @GetMapping("/lotto/game/random")
    public CommonResult<Object> getRandomGame(){
        int lottoGameLength = 7;
        LottoGame lottoGame = new LottoGame(lottoGameLength);
        LottoDTO.RandomGameResponse randomGame = new LottoDTO.RandomGameResponse(lottoGame.getGame());
        String msg = "랜덤 게임을 가져왔습니다.";
        return CommonResult.builder().status(StatusType.SUCCESS).message(msg).result(randomGame).build();
    }
}
