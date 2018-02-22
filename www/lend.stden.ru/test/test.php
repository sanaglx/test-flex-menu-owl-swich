<?php
/**
 * 
 */
class NewClass
{
    public $ab;
    public $bb;
    public $bc;

    public function First ($xx)
    {
        $this->ab = 5;
        $this->bb =20;
        $this->bc = $xx + $this->ab + $this->bb;
    }

    private function Two($yy)
    {
        
    }
}
 

$obj= new NewClass;



