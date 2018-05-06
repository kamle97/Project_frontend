<?php
// Simulate slow server just to see loading indicator
sleep(2);

$type = isset($_GET['type']) ? $_GET['type'] : 'images';
switch ($type)
{
	case 'data':
		foreach (range(0,2) as $i)
		{
			?>
			<div class="row-item">
				Nulla facilisi. Etiam nunc turpis, mattis vel accumsan sed, vehicula vel quam. Mauris et iaculis enim, at commodo ipsum. Sed ac rhoncus sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis suscipit nibh, non cursus lectus placerat ornare. Donec dignissim dictum volutpat. Fusce vitae pharetra lacus.
			</div>
			<?php
		}
		break;
	case 'images':
	default:
		$arr = array();
		$dir = 'images/';
		if ($handle = opendir($dir))
		{
		    while (false !== ($entry = readdir($handle)))
		    {
		        if ($entry != "." && $entry != "..")
		        {
		        	$arr[] = $dir.$entry;
		        }
		    }
		    closedir($handle);
		}
		
		$cnt = count($arr);
		
		$items = array();
		foreach (range(1,9) as $i)
		{
			$items[] = $arr[rand(0, $cnt-1)];
		}
		
		foreach (range(0,2) as $i)
		{
			?>
			<div class="row-item">
				<img src="<?php echo $items[3*$i]; ?>" alt="" />
				<img src="<?php echo $items[3*$i+1]; ?>" alt="" />
				<img src="<?php echo $items[3*$i+2]; ?>" alt="" />
			</div>
			<?php
		}
		break;
}
?>