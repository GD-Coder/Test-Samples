/** 
*  TCMS Project.
*  TicketForm.test.js
*  Created: December 21, 2018 
*  Author: Gerald Downey
*
* Description: These are the front end tests for the form used to create help desk tickets.
*/

import Vuetify from 'vuetify'
import VueIntro from 'vue-introjs'
import { mount, createLocalVue, shallowMount, config } from '@vue/test-utils'
import TicketForm from '../../helpdesk/components/TicketForm.vue'
jest.mock('../../helpdesk/mixins/selectBoxData.js')

describe('TicketForm.New', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(VueIntro)
    const wrapper = mount(TicketForm, {
        localVue: localVue,
        methods: {
            setUpGlobals: () => {},
            addTask: () => {}
        }
    })
    test('data to be a function', () => {
      expect(typeof TicketForm.data).toBe('function')
    })
    test('correctly sets the form title', () => { 
        expect(wrapper.text()).toContain('Add New Ticket')
    })
    test('has add a task button', () => {
        let button = wrapper.find('#add-task')
        expect(button.text()).toBe('+ Task')
    })
    test('has add a ticket button', () => {
        let button = wrapper.find('#add-ticket')
        expect(button.text()).toBe('+ Ticket')
    })
    test('has a save button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px;">save</i></div>')
    })
    test('has an attach button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px;">attach_file</i></div>')
    })
    test('has a clear button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">Clear</div>')
    })
    test('has a create button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">Create</div>')
    })
    test('has a title input', () => {
        expect(wrapper.html()).toContain('<label>Title</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">title</i><input spellcheck="false" outline="" required="required" tabindex="0" aria-label="Title" type="text"></div>')
    })
    test('has a group input', () => {
        expect(wrapper.html()).toContain('<label>Group</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">group</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a category input', () => {
        expect(wrapper.html()).toContain('<label>Category</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">label</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a priority input', () => {
        expect(wrapper.html()).toContain('<label>Priority</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">star</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a room input', () => {
        expect(wrapper.html()).toContain('<label>Room</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">add_location</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a phone input', () => {
        expect(wrapper.html()).toContain('<label>Phone</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">phone</i><input outline="" spellcheck="false" tabindex="0" aria-label="Phone" type="text"></div>')
    })
    test('has a decription input', () => {
        expect(wrapper.html()).toContain('<label>Description</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">chat</i><textarea outline="" required="required" tabindex="0" aria-label="Description" rows="3"></textarea></div><div class="input-group__details"><div class="input-group__messages input-group__hint">Enter a decription of the problem you are having</div>')
    })
  })

  describe('TicketForm.Edit', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(VueIntro)
    const wrapper = mount(TicketForm, {
        localVue: localVue,
        methods: {  
            setUpGlobals: () => {},
            addTask: () => {}
        }
    })
    wrapper.vm.view = true
    wrapper.vm.ticket.status = 1
    wrapper.vm.ticket.isCreatorOrAdmin = true
    test('data to be a function', () => {
      expect(typeof TicketForm.data).toBe('function')
    })
    test('correctly sets the form title', () => { 
        expect(wrapper.text()).toContain('Edit Ticket')
    })
    test('has add a task button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">+ Task</div>')
    })
    test('has add a ticket button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">+ Ticket</div>')
    })
    test('has a hold button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px; margin-right: 5px;">pan_tool</i></div>')
    })
    test('has an attach button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px;">attach_file</i></div>')
    })
    test('has a update button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">Update</div>')
    })
    test('has a cancel button', () => {
        expect(wrapper.html()).toContain('<div class="btn__content">Cancel</div>')
    })
    test('has a title input', () => {
        expect(wrapper.html()).toContain('<label>Title</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">title</i><input spellcheck="false" outline="" required="required" tabindex="0" aria-label="Title" type="text"></div>')
    })
    test('has a group input', () => {
        expect(wrapper.html()).toContain('<label>Group</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">group</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a category input', () => {
        expect(wrapper.html()).toContain('<label>Category</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">label</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a priority input', () => {
        expect(wrapper.html()).toContain('<label>Priority</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">star</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a room input', () => {
        expect(wrapper.html()).toContain('<label>Room</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">add_location</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off"></div>')
    })
    test('has a phone input', () => {
        expect(wrapper.html()).toContain('<label>Phone</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">phone</i><input outline="" spellcheck="false" tabindex="0" aria-label="Phone" type="text"></div>')
    })
    test('has a decription input', () => {
        expect(wrapper.html()).toContain('<label>Description</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">chat</i><textarea outline="" required="required" tabindex="0" aria-label="Description" rows="3"></textarea></div><div class="input-group__details"><div class="input-group__messages input-group__hint">Enter a decription of the problem you are having</div>')
    })
  })

  describe('TicketForm.Complete', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(VueIntro)
    const wrapper = mount(TicketForm, {
        localVue: localVue,
        methods: {  
            setUpGlobals: () => {},
            addTask: () => {}
        }
    })
    wrapper.vm.view = true
    wrapper.vm.ticket.status = 3
    wrapper.vm.ticket.isCreatorOrAdmin = true
    test('data to be a function', () => {
      expect(typeof TicketForm.data).toBe('function')
    })
    test('correctly sets the form title', () => { 
        expect(wrapper.text()).toContain('Edit Ticket')
    })
    test('has add a task button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content">+ Task</div>')
    })
    test('has add a ticket button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content">+ Ticket</div>')
    })
    test('has a hold button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px; margin-right: 5px;">pan_tool</i></div>')
    })
    test('has an attach button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content"><i aria-hidden="true" class="icon material-icons" style="margin-top: 30px;">attach_file</i></div>')
    })
    test('has a update button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content">Update</div>')
    })
    test('has a cancel button', () => {
        expect(wrapper.html()).not.toContain('<div class="btn__content">Cancel</div>')
    })
    test('has a title input', () => {
        expect(wrapper.html()).toContain('<label>Title</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">title</i><input spellcheck="false" outline="" required="required" tabindex="0" aria-label="Title" type="text" readonly="readonly"></div>')
    })
    test('has a group input', () => {
        expect(wrapper.html()).toContain('<label>Group</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">group</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off" readonly="readonly"></div>')
    })
    test('has a category input', () => {
        expect(wrapper.html()).toContain('<label>Category</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">label</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off" readonly="readonly">')
    })
    test('has a priority input', () => {
        expect(wrapper.html()).toContain('<label>Priority</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">star</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off" readonly="readonly"></div>')
    })
    test('has a room input', () => {
        expect(wrapper.html()).toContain('<label>Room</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">add_location</i><div class="input-group__selections" style="overflow: hidden;"><input outline="" tabindex="0" role="combobox" class="input-group--select__autocomplete" autocomplete="off" readonly="readonly">')
    })
    test('has a phone input', () => {
        expect(wrapper.html()).toContain('<label>Phone</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">phone</i><input outline="" spellcheck="false" tabindex="0" aria-label="Phone" type="text" readonly="readonly">')
    })
    test('has a decription input', () => {
        expect(wrapper.html()).toContain('<label>Description</label><div class="input-group__input"><i aria-hidden="true" class="icon material-icons input-group__prepend-icon">chat</i><textarea outline="" required="required" tabindex="0" aria-label="Description" rows="3" readonly="readonly">')
    })
  })