package com.example.app;

import android.os.Bundle;

import com.abpjap.plugin.youtubeplayer.YoutubePlayer;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(YoutubePlayer.class);
    }
}
