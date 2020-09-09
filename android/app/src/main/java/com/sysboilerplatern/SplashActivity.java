package com.sysboilerplatern;

import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.ReactActivity;
public class SplashActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }

}
