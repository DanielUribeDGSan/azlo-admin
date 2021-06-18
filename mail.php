<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$nombre = $_POST['nombre'];
$email = $_POST['email'];
// $nombre = 'Daniel Uribe';
// $email = 'daniel.dg77.dg77@gmail.com';

require './PHPMailer/phpmailer/PHPMailer.php';
require './PHPMailer/phpmailer/SMTP.php';
require './PHPMailer/phpmailer/Exception.php';
require './PHPMailer/phpmailer/OAuth.php';

//Load Composer's autoloader
require 'vendor/autoload.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'daniel.uribe.garcia07@gmail.com';                     //SMTP username
    $mail->Password   = 'Chivas1314_';                               //SMTP password
    $mail->SMTPSecure = 'tls';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('daniel.uribe.garcia07@gmail.com', 'Azlo Admin');
    $mail->addAddress($email, $nombre);     //Add a recipient               

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Nuevo aviso';
    $mail->Body    = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>AZLO AVISO</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 25px 15px 25px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 16px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class=gmail-fix] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 15px 25px 15px 25px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #f6f6f6">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
      >
        <tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table
              class="es-header"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td
                  style="
                    padding: 0;
                    margin: 0;
                    background-image: url(https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg);
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-size: cover;
                  "
                  bgcolor="#3d4c6b"
                  align="center"
                  background="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg"
                >
                  <table
                    class="es-header-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-bottom: 25px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 25px;
                                      padding-top: 40px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      href="https://viewstripo.email"
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/90451519716512050.png"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        alt="Logo"
                                        title="Logo"
                                        width="50"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        line-height: 48px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 40px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #ffffff;
                                      "
                                    >
                                      Hola: ' . $nombre . '
                                    </h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    esdev-links-color="#b7bdc9"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 30px;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                    >
                                      Se ha creado un nuevo aviso, da click en
                                      el botón de abajo para poder ver el aviso.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#f6f6f6"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      width="100%"
                                      height="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr style="border-collapse: collapse">
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #f6f6f6;
                                            background: #ffffff none repeat
                                              scroll 0% 0%;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  border-radius: 3px;
                                  background-color: #ffffff;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                role="presentation"
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://viewstripo.email"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #75b6c9;
                                        font-size: 16px;
                                      "
                                      ><img
                                        class="adapt-img"
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/17611519723274581.png"
                                        alt="Nuevo aviso"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          border-radius: 3px 3px 0 0;
                                        "
                                        title="Nuevo aviso"
                                        width="600"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: 24px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #444444;
                                      "
                                    >
                                      Nuevo aviso
                                    </h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 15px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #75b6c9;
                                        background: #75b6c9;
                                        border-width: 1px;
                                        display: inline-block;
                                        border-radius: 28px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://viewstripo.email"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #75b6c9;
                                          border-width: 15px 25px 15px 25px;
                                          display: inline-block;
                                          background: #75b6c9;
                                          border-radius: 28px;
                                          font-family: open sans, helvetica neue,
                                            helvetica, arial, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >Ver aviso →</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 40px;
                          padding-bottom: 40px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://viewstripo.email"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/55891519718168286.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="Logo"
                                        width="35"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                    >
                                      AZLO ADMIN
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
';


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
