<div class="panel-heading">
    <h2>{{ pageTitle }}</h2>    
</div>
<div class="panel-body">
    <div class="row filter">
        <div class="col-md-4"><span class="glyphicon glyphicon-search" aria-hidden="true"><input type="text" class="search" [(ngModel)]="listFilter"></span></div>
        <div class="col-md-8">Resultados filtrados por: <strong>{{ listFilter }}</strong></div>
    </div>
    <div class="table-responsive">
        <table class='table' *ngIf='cultismos && cultismos.length'>
            <thead>
                <tr>
                    <th>{{ msgCultismo }}</th>
                    <th>{{ msgDcech }}</th>
                    <th>{{ msgOcurrencias }}</th>                   
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#cultismo of cultismos | cultismoFilter:listFilter">
                    <td>{{ cultismo.cultismo }}</td>
                    <td>{{ cultismo.dcech }}</td>
                    <td>
                        <ul>
                            <li *ngFor="#ocurrencia of cultismo.ocurrencias">{{ ocurrencia }}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="panel">
        <div class="alert alert-danger" role="alert" *ngIf='msgError'>
            {{ msgError }}
        </div>
    </div>
</div>