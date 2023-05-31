package com.example.demo.controller;

import com.example.demo.entity.AuthUser;
import com.example.demo.request.membership.PayReadyRequest;
import com.example.demo.response.membership.PaySuccessResponse;
import com.example.demo.service.KaKaoPayService;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class KaKaoPayController {

    private final KaKaoPayService kaKaoPayService;

    @PostMapping("/kakaopay")
    public String payReady(@RequestBody @Valid PayReadyRequest request, AuthUser authUser) {

        log.info("payReady() memberId={}, request={}", authUser.getUserId(), request);
        String redirectPcUrl = kaKaoPayService.kakaoPayReady(authUser.getUserId(), request).getBody().getNext_redirect_pc_url();
        return redirectPcUrl;
    }

    @GetMapping("/kakaopay/{pg_token}")
    public PaySuccessResponse payApprove(@PathVariable("pg_token") String token, AuthUser authUser) {
        return kaKaoPayService.kakaoPayApprove(authUser.getUserId(), token);
    }

}
