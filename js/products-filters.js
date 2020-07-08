// Product Type Filter Triggers
var $triggerFilter = $(".filters [data-filter]");

// Filtered Items Container
var $filterItems = $(".filter-items [data-name]");

// Product Filter Functions
$triggerFilter.on("click", function (e) {
  e.preventDefault();

  var $this = $(this);
  var $filter = $this.attr("data-filter");

  $triggerFilter.removeClass("active");
  $this.addClass("active");

  if ($filter == "all") {
    $filterItems.show().addClass("is-animated");
  } else {
    $filterItems
      .hide()
      .removeClass("is-animated")
      .fadeOut()
      .promise()
      .done(function () {
        $filterItems
          .filter(`.filter-items [data-name=${$filter}]`)
          .addClass("is-animated")
          .show()
          .fadeIn();
      });
  }
});
