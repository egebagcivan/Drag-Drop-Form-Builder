<?php
/**
 * Class Menu
 *
 * @since 1.0
 */
function jotform_admin_menu() {
  add_menu_page(
		'Jotform', 
		'Jotform', 
		'manage_options', 
		'jotform-admin-menu', 
		'jotform_admin_menu_main', 
		get_menu_icon(), 
		50);

  add_submenu_page(
		'jotform-admin-menu', 
		'Inbox', 
		'Inbox', 
		'manage_options', 
		'jotform-admin-menu-inbox', 
		'jotform_admin_menu_inbox');

  add_submenu_page(
		'jotform-admin-menu', 
		'Account Settings', 
		'Account Settings', 
		'manage_options', 
		'jotform-admin-menu-accountsettings', 
		'jotform_admin_menu_accountSettings');
}

function jotform_admin_menu_main() {
	//get the response code from the server and assign it to a variable called $ret
	try {
		$URL = 'https://www.jotform.com/platform/?product=myforms&client=wordpress';
		$ch = curl_init($URL);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_exec($ch);
		$ret = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
	} catch(Exception $e) {
		echo $e->getMessage();
	}

	?>
	<?php
	if($ret == 404) {
		echo '<iframe src="https://www.jotform.com/platform/oauth.php" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
			</iframe>';
	} else {
		echo '<iframe src="https://www.jotform.com/platform/?product=myforms&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
			</iframe>';
		
	}
	
}
function jotform_admin_menu_inbox() {
  echo 
	'<iframe src="https://www.jotform.com/platform/?product=inbox&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
}
function jotform_admin_menu_accountSettings() {
  echo 
	'<iframe src="https://jotform.com/platform/?product=myaccount&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
}


	/**
	 * Jotform icon svg image.
	 *
	 * @return string
	 */
	function get_menu_icon() {
		ob_start();
    require_once JOTFORM_DRAGDROP_FORM_PLUGIN_DIR . 'includes/assets/jotform.svg';
		$svg = ob_get_clean();
		return 'data:image/svg+xml;base64,' . base64_encode( $svg );
	}
add_action('admin_menu', 'jotform_admin_menu');
add_action('admin_head', 'admin_styles');

/**
 * Admin styles.
 * Remove the padding left on the admin menu.
 * @since 1.0
 */
function admin_styles() {
    echo '<style>
        #wpcontent {
            padding-left: 0px;
        }
				h1 {
				
					position: absolute;

					text-align: center;
					font-family: "Circular Std";
					font-style: normal;
					font-weight: 700;
					font-size: 46px;
					line-height: 58px;
					font-feature-settings: "liga" off;
				
					color: #0a1551;
				}
				h2 {
					
					text-align: center;
					font-family: "Circular Std";
					font-style: normal;
					font-weight: 450;
					font-size: 20px;
					line-height: 130%;
				
					color: #6f76a7;

				}
				
    </style>';
}
?>