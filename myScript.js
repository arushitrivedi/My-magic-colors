var colors=["red",'blue','green', 'maroon','Crimson', 'Teal', 'Sienna','orange','pink','turquoise', 'CardetBlue','grey','azure', 'chocolate','CornflowerBlue', 'crimson','cyan','DarkSlateBlue', 'DeepPink','DodgerBlue','Fuchsia','Gold', 'HotPink', 'Indigo'];
i=0;
$("#change-color").click(function()
{
    $("div").css("backgroundColor",colors[i]);
    i=(i==colors.length-1)?0:(i+1);
});