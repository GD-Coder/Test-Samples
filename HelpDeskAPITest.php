<?php

/*
*  TCMS Project.
*  HelpDeskAPITest.php
*  Created: December 3, 2018 
*  Author: Gerald Downey
*/

namespace Tests\Feature\HelpDesk;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\NCED\AppUsers;

class HelpDeskAPITest extends TestCase
{
    use AppUsers;
    
    public function test_that_help_desk_index_returns_team_data()
    {
        $this->actingAs($this->superUser())->get('/teams')
        ->assertStatus(200)
        ->assertJsonFragment([
            "short_name" => "ASB"
        ]);
    }

    public function test_that_help_desk_index_returns_priority_data()
    {
        $this->actingAs($this->superUser())->get('/priorities')
        ->assertStatus(200)
        ->assertJsonFragment([
            "name" => "Low"
        ]);
    }

    public function test_that_help_desk_index_returns_rooms_data()
    {
        $this->actingAs($this->superUser())->get('/rooms')
        ->assertStatus(200)
        ->assertJsonFragment([
            "short_name" => "NoRoom"
        ]);
    }

    public function test_that_help_desk_table_returns_active_tickets()
    {
        $this->actingAs($this->superUser())->get('/tickets')
        ->assertStatus(200)
        ->assertJsonFragment([
            "status" => "Open"
        ]);
    }

    public function test_that_help_desk_table_returns_canceled_tickets()
    {
        $this->actingAs($this->superUser())->get('/canceled-tickets')
        ->assertStatus(200);
    }

    public function test_that_help_desk_table_returns_completed_tickets()
    {
        $this->actingAs($this->superUser())->get('/complete-tickets')
        ->assertStatus(200);
    }

    public function test_that_help_desk_categories_return_properly()
    {
        $this->actingAs($this->superUser())->get('/categories')
        ->assertStatus(200)
        ->assertJsonFragment([
            "name" => "Computer"
        ]);
    }

    public function test_that_help_desk_leads_return_properly()
    {
        $this->actingAs($this->superUser())->get('/team-leads/30')
        ->assertStatus(200)
        ->assertJsonFragment([
            "full_name" => "Gerald Downey"
        ]);
    }
}
