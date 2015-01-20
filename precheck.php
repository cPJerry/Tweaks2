<html>
<head>
<title>WHMCS Pre-Install Requirment Check</title>
<style>
body, td {
    font-family: Tahoma;
    font-size: 14px;
}
.passfail {
padding: 5px 0 5px 25px;
}
.faillarge {
background: url(data:image/png;base64,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) no-repeat center;
background-size:64px;
}
.passlarge {
background: url(data:image/png;base64,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) no-repeat center;
background-size:64px;
}
.fail {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACf0lEQVRIid2VsWsUQRTGf0+8KUIIRyqLIHshdkkEm1hOAiEpDzRVGhutxDZFCitFsPEsJFVK4apAihQScGxELhDQf+AWkcNCJBxBwl7xLHZmd25vNWKnb4odZmfe977vezsL/3rIZRtSa6ZA10BWFJ0DQdCBwgnIcctl538FkFozDewo+hBo5lu1enwosAc8SVw2/GOAvm0sCnIALNTDa3RUAUkVvdNyo9NLAVLbWFR4B8wKgvqqwzx+5umL+RB0NamAXBlPbqYVDoDZUBvwJZqPPTV6pzCjcJBa0/wlALAjyIIQBvvADYFD8SzE0xboAUsCu9HadeBxLUBqzZQ3NMjyAbjfcqMLkC3gUEuTe8BGy2VnwFPQ1xG7B/2IRQGg6BrQDEkUvR0AE5dlQADpKWwkeXIU2gp3I+mmQDcnAARZKaUpRie15lEMIsh6y43OPOu2QFcQE8mEICsh79WSAXNEXeJBUbSTWkPispctN8qALCQHugpmrGFz9nM1DChar7C4XNtObcOEvX3bANgGTNhH5fwEAOhAfcOF4ec9YCPJqweg5UYA2+qNrw7QQQ2AnJRcirWeIIWhqTXt1DYiT3Qrb+Eq45Br/Ds4FmQYSfRJ0SJ53zbaQBek0/fG557IFvAmkuYCOJoASPJbcS+SaB5YDpULdBU1XoJOYKLovKLLkUT7icu+l75EkVozA3xUNPEVnSv6HNgVxFTvIoVnoPcEueZ9/AosJW70rRbAS3FLkLfATPXdJfEDdD1xo/fxYvUuwl+5q4p+rumo2uErn0heCwCQuOxUkJsgL/LKSrKVb+VC4BXIUuKyieTlqd9Eak1T0U2p+WUKchQb+n/GTwm3P4fWTioDAAAAAElFTkSuQmCC) no-repeat right;
}
.pass {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACyUlEQVRIiaWWPWgcVxSFvzMIkUKEVFs5IIwKoUKgWk1mLUGICwVSqLCbkKTYxRYEgwW79axJQI2K2UAgKmwC6pLCaSR2KtchWyhbqAjEpNgihdnCGOOTYn52djwjCXKX4R3uu3Pfu2fPfW/EFdYbdZYl7QC7xhuYVjY1lXSBOTM+H7SHb5pyqM7ZT7of2D6Q9AiKpE02tX0k6TgK49fXLtBLOpvAKWZdErbTwAxLwhhZIMp4YrM/aMfjxgX6Sbdt+1dgJZ90KdBcazNJe1EYj95boDfqbEp6kSf/HzazvT1oD8fFAhnnv0M9LWVcHoEmPDFsDcL4dZBNHADreVBhNdil0TZIv9h+VfGvgw8A1E+6y8DfXK+WOvsZuAesAmfAWmluCnwc2N4BWsWOyrurwaXxH/DDKIzzZEG5etst8M4S0m5l4kYUYX8TtYf/Zr4nwO3q+za7S4INVNtvwKKOS/inKIx/A+iNOp9IetDw+kaQlnI1LYuYv4y/Begn3Q+BEyAXyyITphXkEpNEBc9s35H0peBd5n8n8dUgHL7K8hxJWi0qLDEhpZ2+ZHuKNOc7a1lJ/UF7OALoJd23wAn2DyXfp7a/buQ2tWkg6WKR56JpHvaT7i2AQRg/w/5C0mHG+0eCH/NYZb8qBi7UG3U+k/S8YQeXxuEgHL7MHf2kC/AUuH/N7sG+GwDnTo/c9E/EzDFrmKQ/SivJ7HPb94uY5mdq6VxZyY+B76D+/AEuJd0B3gB/2G4VVGLqMOIwCuPvgzQRx5ImVyhqDfgze1q5QtBcLRU8sX2crjPndtP2C8TK/BIoq0uLnd1sM0nbUZhePEHujcJ4LGlPaJb76rr4SuVI+YUzrstRVAKckh3fNzZ7AtqPKldmUI2LwniMvWX7kAV1Ua8WPE1jtVVNXltBpZplYMf2rqQN41bW5VPbF0hnMudRO278bPkPohLc3mjahmYAAAAASUVORK5CYII=) no-repeat right;
}
a {
color: inherit;
}
</style>
</head>
<body bgcolor="#efefef">

<div style="margin:0;width:100%;height:100%;background-color:#efefef;">
<div style="background-color:#fff;margin:0 auto;padding:15px 0;width:600px;">

<div style="background-color:#00344c;padding:20px 30px;">

<center><img src="data:image/png;base64,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CxMBAJqcGAAABCNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAgPHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+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" width="184" height="45" border="0" /></center>


</div>
<div style="background-color:#f8f8f8;margin:0;padding:10px 30px;text-align:center;font-weight:bold;font-size:30px;">
Pre-Installation Check
</div>

<div style="padding:25px;">
<table>
<?php
  /** These will allow for translation **/

$language = "english";
$english['goodversion'] = "Your PHP version, _1, is compatible.";
$english['badversion'] = "Your PHP version, _1, is not compatible. We require at least _2, but no greater than _3.";
$english['disabledfunc'] = "Function Check: <b><u><a href='http://php.net/_1' target='new'>_1</a></u></b> is disabled";
$english['nondisabledfunc'] = "Function Check: <b><u><a href='http://php.net/_1' target='new'>_1</a></u></b> is not disabled";
$english['extloaded'] = "The extension <b><u>_1</u></b> is loaded.";
$english['extnotloaded'] = "The extension <b><u>_1</u></b> is required.";
$english['curlssl'] = "Your loaded CURL supports SSL.";
$english['curlnossl'] = "Your loaded CURL does not support SSL";
$english['nocurl'] = "The extension <b><u>CURL with SSL</u></b> is required";
$english['pass'] = "Your System is able to run WHMCS.";
$english['fail'] = "Your System is not able to run WHMCS.";
$english['goodmem'] = "Your allowed memeory (_1) meets our requirments. (_2)";
$english['badmem'] = "Your memory limit (currently _1MB) must be at least _2MB.";
$english['badconfig'] = "The PHP setting _1 is invalid, please turn it _2";
$english['goodconfig'] = "The PHP setting _1 has a valid value.";
$LANG = $$language;



class PreCheck {

  public $disabled_functions;
  private $needs;
  private $hidePass;
  private $minVersion;
  private $maxVersion;
  private $curVersion;
  private $fail;
  private $ext;
  private $settings;
  public function __construct($hide=0) {
    $this->hidePass = $hide;
    $this->ext = array();
    $this->fail = 0;
    $this->disabled_functions = array();
    self::setDisabled();
    self::getVersion();
  }

  private function checkSetting() {
    global $LANG;
    foreach($this->settings as $setting) {
      if ($this->boolcheck(ini_get($setting['name'])) != $setting['value']) {
	$this->fail($this->parse($LANG['badconfig'],array($setting['name'],($setting['value'] == "false")?"Off":"On")));
      } else {
	$this->success($this->parse($LANG['goodconfig'],array($setting['name'])));
      }
    }
  }

  private function boolcheck($item) {
    if ($item == '') return "false";
    if ($item === 1) return "true";
    if ($item === 0) return "false";
    if ($item == true) return "true";
    if ($item == false) return "false";
    return $item;
  }

  public function addSetting($set,$val) {
    $this->settings[] = array("name"=>$set,"value"=>$val);
  }

  private function pass() {
    global $LANG;
    if ($this->hidePass) {
      echo "<tr><td width='95%'>&nbsp;</td><td >&nbsp;</td></tr>";
    } else {
      echo "\t<tr style='height: 25px;'>\n\t\t<td>&nbsp;</td>\n\t</tr>\n";
    }
    echo "\t<tr style='height:64px;'>\n\t\t<td width='100%' class='passlarge'>&nbsp;</td>\n\t</tr>\n\t<tr>\n\t\t<td width='100%' style='text-align:center'>".$LANG['pass']."</td>\n\t</tr>\n";
  }

  private function nopass() {
    global $LANG;
    echo "\t<tr style='height: 25px;'>\n\t\t<td>&nbsp;</td>\n\t</tr>\n\t<tr style='height:64px;'>\n\t\t<td width='100%' class='faillarge'>&nbsp;</td>\n\t</tr>\n\t<tr>\n\t\t<td width='100%' style='text-align:center'>".$LANG['fail']."</td>\n\t</tr>\n";
  }

  private function parse($str,$args = null) {
    if ($args == null) return $str;
    $count = 1;
    foreach($args as $a) {
      $str = str_replace("_".$count,$a,$str);
      $count++;
    }
    return $str;
  }

  private function success($str) {
    if ($this->hidePass) return;
    echo "\n\t<tr>\n\t\t<td width='95%'>\n\t\t\t<font style='color: green'>".$str."</font>\n\t\t</td>\n\t\t<td class='pass passfail'>&nbsp;</td>\n\t</tr>\n";
  }

  private function fail($str) {
    $this->fail = 1;
    echo "\n\t<tr>\n\t\t<td width='95%'>\n\t\t\t<font style='color: red'>".$str."</font>\n\t\t</td>\n\t\t<td class='fail passfail'>&nbsp;</td>\n\t</tr>\n";
  }
  

  private function getVersion() {
    $this->curVersion = phpversion();
  }

  private function setDisabled() {
    $disabled = ini_get("disable_functions");
    $disabled = explode(",",$disabled);
    foreach($disabled as $d) {
      if ($d == '') continue;
      $d = trim($d);
      $this->disabled_functions[] = $d;
    }
  }

  public function minVersion($ver) {
    $this->minVersion = $ver;
  }

  public function maxVersion($ver) {
    $this->maxVersion = $ver;
  }

  private function checkVersion() {
    global $LANG;
    $ver = explode(".",$this->curVersion);
    $myVersion['minor'] = $ver[1];
    $ver = explode(".",$this->minVersion);
    $minVersion['minor'] = $ver[1];
    $ver = explode(".",$this->maxVersion);
    $maxVersion['minor'] = $ver[1];
    // PHP 6 wont be out in the forseeable future. I am going to assume the major is 5
    if ($myVersion['minor'] >= $minVersion['minor'] && $myVersion['minor'] <= $maxVersion['minor']) {
      $this->success($this->parse($LANG['goodversion'],array($this->curVersion)));
    } else {
	$this->fail($this->parse($LANG['badversion'],array($this->curVersion,$this->minVersion,$this->maxVersion)));
    }
    
  }
  
  public function requires($func) {
    $this->needs[] = $func;
  }

  public function required_ext($ext) {
    $this->ext[] = $ext;
  }

  public function run() {
    $this->checkSetting();
    $this->checkMem();
    $this->checkDisabled();
    $this->checkVersion();
    $this->checkExt();
    $this->checkCurlSSL();
    

    $this->showPassFail();
  }

  private function showPassFail() {
    if ($this->fail) {
      $this->nopass();
    } else {
      $this->pass();
    }
  }

  private function checkCurlSSL() {
    global $LANG;
    if (extension_loaded("curl")) {
      $version = curl_version();
      $ssl_supported= ($version['features'] & CURL_VERSION_SSL);
      if ($ssl_supported) {
	$this->success($this->parse($LANG['curlssl']));
      } else {
        $this->fail($this->parse($LANG['curlnossl']));
      }
    } else {
      $this->fail($this->parse($LANG['nocurl']));
    }
  }
  private function checkExt() {
    global $LANG;
    foreach ($this->ext as $ext) {
      if (extension_loaded($ext)) {
	$this->success($this->parse($LANG['extloaded'],array($ext)));
      } else {
	$this->fail($this->parse($LANG['extnotloaded'],array($ext)));
      }
    }
  }

  private function checkMem() {
    global $LANG;
    $mem = preg_replace("/([0-9]*)(.*)/","$1",ini_get("memory_limit"));
    if ($mem >= $this->reqMem) {
      $this->success($this->parse($LANG['goodmem'],array($mem,$this->reqMem)));
    } else {
      $this->fail($this->parse($LANG['badmem'],array($mem,$this->reqMem)));
    }
  }

  public function setMem($mem) {
    $this->reqMem = $mem;
  }

  private function checkDisabled() {
    global $LANG;
    foreach($this->needs as $func) {
      if (in_array($func,$this->disabled_functions)) {
	$this->fail($this->parse($LANG['disabledfunc'],array($func)));
      } else {
        $this->success($this->parse($LANG['nondisabledfunc'],array($func)));
      }
    }
  }
}
$a = new PreCheck(isset($_GET['hidepass']));

$a->setMem(64);

/** Required FUnction **/
$a->requires("base64_decode");
$a->requires("readfile");
$a->requires("copy");
$a->requires("preg_match_all");
$a->requires("fsockopen");
$a->requires("print_r");
$a->requires("curl_exec");
$a->requires("escapeshellcmd");
$a->requires("unlink");
$a->requires("file_get_contents");
$a->requires("is_readable");
$a->requires("fwrite");
$a->requires("tempnam");
/** End Required Functions **/

$a->addSetting("open_basedir","false");
$a->addSetting("magic_quotes_runtime","false");
$a->addSetting("magic_quotes_sybase","false");
$a->addSetting("session.auto_start",'false');
$a->addSetting("safe_mode","false");
$a->addSetting("register_globals","false");
$a->addSetting("file_uploads","true");



/** Required Extensions **/
$a->required_ext("gd");
$a->required_ext('IonCube Loader');
$a->required_ext('mysql');
/** End Required Extentions **/

/** PHP Version Check **/
$a->minVersion("5.2");
$a->maxVersion("5.4");
/** End PHP Version Check **/
//print_r(get_loaded_extensions());die;





$a->run();

?>
</table>
</div>



<div style="padding:0 25px;font-size:11px;width:400px;">Copyright &copy; WHMCS Ltd. 2005-2014. All Rights Reserved. UK Registered Company #6265962. Vat No. GB 927 7746 76</div>

</div>
</div>

</body>
</html>
