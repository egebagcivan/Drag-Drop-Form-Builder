<?php
error_reporting(E_ALL & ~E_NOTICE);
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

		if(get_option('x_token') != null) {
			add_submenu_page(
				'jotform-admin-menu', 
				'Inbox', 
				'Inbox', 
				'manage_options', 
				'jotform-admin-menu-inbox', 
				'jotform_admin_menu_inbox');
		}
  
}

function jotform_admin_menu_main() {
	if($_GET['accessToken'] != null) {
		$accessToken = $_GET['accessToken'];
		add_option('x_token', $accessToken);
		$token = get_option('eeeeeee_token');
	} else if($token != $accessToken) {
		$accessToken = $_GET['accessToken'];
		update_option('x_token', $accessToken);
	} 

	if(get_option('x_token') != null) {
		$url = urlencode('https://www.jotform.com/platform/?product=myforms&client=wordpress');
		echo 
	'<iframe src="https://api.jotform.com/login?apikey='.get_option('x_token').'&return='.$url.'" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
	}
	else {
		echo '<div id="jf-container"><div class="row"><h1 class="one">Create Custom Wordpress Forms</h1></div>
		<div class="row"><p class="two">Collect the data you need to power your business — without changing your entire website. Build custom online forms with Jotform and easily embed them in your WordPress-powered site.</p></div>
		<div class="row-last"><div class="same"><button id="btnLogin" class="button1">Login to Jotform</button><div class="center"><p>Don&#39;t Have An Account? <a href="#">Sign Up</a></p></div></div>
		<img src="'.plugins_url('../includes/assets/jf-icon.svg', __FILE__).'" alt="Jotform" class="jotform-logo" /></div></div>';
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
      wp_enqueue_script( 'script', JOTFORM_DRAGDROP_FORM_PLUGIN_URL . 'includes/js/popup.js' );
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