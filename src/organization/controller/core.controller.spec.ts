import { Test, TestingModule } from '@nestjs/testing';
import { CoreController } from './core.controller';
import { Service } from '../services/core.service';
import { CreateDto } from '../dto/create.dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';

const organizationList: CreateDto[] = [
    { name: "TesteOganization" }
];

describe('TodoController', () => {
    let coreController: CoreController;
    let coreService: Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CoreController],
            providers: [JwtAuthGuard,
                {
                    provide: Service,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue(organizationList),
                        // create: jest.fn().mockResolvedValue(newTodoEntity),
                        // findOne: jest.fn().mockResolvedValue(todoEntityList[0]),
                        // update: jest.fn().mockResolvedValue(updatedTodoEntity),
                        // remove: jest.fn().mockResolvedValue(undefined),
                    },
                },
            ],
        }).compile();
        coreController = module.get<CoreController>(CoreController);
        coreService = module.get<Service>(Service);
    });

    it('should be defined', () => {
        expect(coreController).toBeDefined();
        expect(coreService).toBeDefined();
    });

    describe('index', () => {
        it('should return a todo list entity successfully', async () => {
            // Act
            const result = await coreController.findAll();
            // Assert
            expect(result).toEqual(organizationList);
            expect(typeof result).toEqual('object');
            expect(coreService.findAll).toHaveBeenCalledTimes(1);
        });
    });
});