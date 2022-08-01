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

	if($ret == 404) {
		echo '<div id="jf-container"><div class="row"><h1 class="one">Create Custom Wordpress Forms</h1></div>
		<div class="row"><p class="two">Collect the data you need to power your business — without changing your entire website. Build custom online forms with Jotform and easily embed them in your WordPress-powered site.</p></div>
		<div class="row-last"><div class="same"><button href="#" class="button1">Login to Jotform</button><div class="center"><p>Don&#39;t Have An Account? <a href="#">Sign Up</a></p></div></div>
		<img src="'.plugins_url('../includes/assets/jf-icon.svg', __FILE__).'" alt="Jotform" class="jotform-logo" /></div></div>';
		
		
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

	function get_jf_icon() {
		ob_start();
    require_once JOTFORM_DRAGDROP_FORM_PLUGIN_DIR . 'includes/assets/jf-icon.svg';
		$svg = ob_get_clean();
		return 'data:image/svg+xml;base64,' . base64_encode( $svg );
	}


	function add_plugin_stylesheet() 
    {
      wp_enqueue_style( 'style', JOTFORM_DRAGDROP_FORM_PLUGIN_URL . 'includes/css/style.css' );
    }

    add_action('admin_print_styles', 'add_plugin_stylesheet');

	

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
    </style>';
}
?>