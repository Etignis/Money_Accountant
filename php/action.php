<?
$data_dir="../data/";
$out=0;

if(!defined("SCANDIR_SORT_ASCENDING")) {
    define("SCANDIR_SORT_ASCENDING", 0);
}
if(!defined("SCANDIR_SORT_DESCENDING")) {
    define("SCANDIR_SORT_DESCENDING", 1);
} 
if($_POST[mod]=='save')
	{
	$out=11;	
	$out=$_POST[nm];
	$file=$_POST[nm];
	$data=$_POST[data];
	
	$save = fopen($data_dir.$file.'.txt', 'w+');
	if ($save) 
		{
		$out="12";
		$test = fwrite($save, $data); // Запись в файл
		if($test)
			{  
			$out="13";
			//			
			}
		fclose($save); // Закрытие файла
		}		
	}
if($_POST[mod]=='open')
	{
	$out=21;	
	
	$folder = $data_dir;// список файлов
	// список файлов
	$files = array();

	$list = scandir($folder, SCANDIR_SORT_ASCENDING);
	 //print_r($list); 
	foreach($list AS $key => $txt)
		{
			$out=22;	
		if($txt!="." && $txt!="..")
			{
			//echo $txt."<br>";
			$files[]=$txt;		
			}
		}
	$out="";	
	foreach($files AS $key=>$val)
	{
		//$out=23;	
		$file_name=$folder.$val;
		$handle = fopen($file_name, "r");
		$contents = fread($handle, filesize($file_name));
		// закрыть файл
		fclose($handle);	

		$out.=$contents;		
	}
			
	}
echo $out;	
?>