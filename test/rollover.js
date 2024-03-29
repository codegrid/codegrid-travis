describe('jquery.rollover', function() {
  var $img;
  var off = 'btn_off.png';
  var on = 'btn_on.png';

  beforeEach(function() {
    $img = $('<img>').attr('src', off).rollover();
    expect($img.attr('src')).to.be(off);
  });

  it('mouseenterで_offが_onになること', function() {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);
  });

  it('mouseleaveで_onが_offになること', function() {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);

    $img.trigger('mouseleave');
    expect($img.attr('src')).to.be(off);
  });
});
