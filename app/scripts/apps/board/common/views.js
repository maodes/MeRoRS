'use strict';

define(['app', 'tpl!apps/board/common/templates/form.tpl', 'fullcalendar', 'backbone.syphon'],
    function(MERORS, formTpl) {
        MERORS.module('BoardApp.Common.Views', function(Views, MERORS, Backbone, Marionette, $, _) {
            Views.Form = Marionette.ItemView.extend({
                template: formTpl,

                events: {
                    'click button.js-submit': 'submitClicked',
                    'click button.js-edit': 'editClicked',
                    'click button.js-delete': 'deleteClicked'
                },

                submitClicked: function(e) {
                    e.preventDefault();
                    var description = (this.$('#description').val()).replace(/(<([^>]+)>)/ig, '');
                    var title = (this.$('#title').val()).replace(/(<([^>]+)>)/ig, '');
                    var user = this.$('#user').val();
                    if ((title && description) && (!this.options.api.isCheckOverlap(this.options))) {
                        var data = Backbone.Syphon.serialize(this);
                        this.trigger('form:submit', data);
                    }
                    
                    
                },

                editClicked: function(e) {
                    e.preventDefault();
                    var description = (this.$('#description').val()).replace(/(<([^>]+)>)/ig, '');
                    var title = (this.$('#title').val()).replace(/(<([^>]+)>)/ig, '');
                    var user = this.$('#user').val();

                    var data = Backbone.Syphon.serialize(this);
                    this.trigger('form:submit', data);

                },

                deleteClicked: function(e) {
                    e.preventDefault();
                    this.trigger('form:delete');

                },

                onFormDataInvalid: function(errors) {
                    var $view = this.$el;

                    var clearFormErrors = function() {
                        var $form = $view.find('form');
                        $form.find('.help-inline.error').each(function() {
                            $(this).remove();
                        });
                        $form.find('.control-group.error').each(function() {
                            $(this).removeClass('error');
                        });
                    };

                    var markErrors = function(value, key) {
                        var $controlGroup = $view.find('#board-' + key).parent();
                        var $errorEl = $('<span>', {
                            class: 'help-inline error',
                            text: value
                        });
                        $controlGroup.append($errorEl).addClass('error');
                    };

                    clearFormErrors();
                    _.each(errors, markErrors);
                }
            });
        });

        return MERORS.BoardApp.Common.Views;
    });