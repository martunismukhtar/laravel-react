<?php

namespace App\Notifications;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailBase;
use Illuminate\Notifications\Messages\MailMessage;
//use Illuminate\Support\HtmlString;

class VerifyEmail extends VerifyEmailBase {
    
    
    protected function verificationUrl($notifiable){
        
        $url = URL::temporarySignedRoute('verification.verify', Carbon::now()->addMinutes(60), ['id'=> $notifiable->getKey()] );

        $temporarySignedURL = str_replace("api/email/", "", $url);
        
        $temporarySignedURL = str_replace("/api/verify/", "/verify/", $temporarySignedURL);
        
        return url($temporarySignedURL);
    }

    public function toMail($notifiable)
    {
        $url = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('Verify Email Address')
            ->line('Thank you for registration.')
            ->line('Please click the button below to verify your email address.')
            ->action('Verify Email Address', $url)
            ->salutation(config('app.name'));
    }
}
