<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends BD_Controller {
    function __construct()
    {
        parent::__construct();
        header("Access-Control-Allow-Origin: *");
        $this->methods['users_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['users_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['users_delete']['limit'] = 50; // 50 requests per hour per user/key
        
        $this->load->helper(array('form', 'url'));
        
        date_default_timezone_set('Asia/Jakarta');
    }
    public function status_get()
    { 
    		$this->response('OK',200);
    }
	public function data_get()
	{
		$data=$this->db->get('penduduk');
		$this->response($data->result(),200);
	}
	public function data_post()
	{
		$data=$this->post();
		$result=$this->db->insert('penduduk',$data);
		$this->response($result,200);
	}
	public function data_put()
	{
		$data=$this->put();
		$nik=$this->uri->segment(3);
		$this->db->where('nik',$nik);
		$result=$this->db->update('penduduk',$data);
		$this->response($result,200);
	}
	public function data_delete()
	{
		$nik=$this->uri->segment(3);
		$this->db->where('nik',$nik);
		$result=$this->db->delete('penduduk');
		$this->response($result,200);
	}
	
	
}
